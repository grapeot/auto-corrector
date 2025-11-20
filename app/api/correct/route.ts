import { NextRequest, NextResponse } from 'next/server';
import { NonExistentModule } from '@/non-existent-module'; // 故意引入不存在的模块，会导致构建失败

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please provide a non-empty text to correct' },
        { status: 400 }
      );
    }

    const apiToken = process.env.AI_BUILDER_TOKEN;
    if (!apiToken) {
      return NextResponse.json(
        { error: 'AI_BUILDER_TOKEN not configured' },
        { status: 500 }
      );
    }

    const apiUrl = process.env.AI_BUILDERS_API_URL || 
                   'https://space.ai-builders.com/backend/v1/chat/completions';

    // V4 prompt - balanced approach
    const prompt = `Please correct the following text which may contain spelling errors, grammar mistakes, typing errors, OR missing words.

IMPORTANT: The text may be INCOMPLETE - words may have been accidentally omitted. Your task is to:
1. Identify ALL missing words that were originally present (including descriptive words, articles, prepositions, verbs, nouns, adjectives, adverbs, and phrases)
2. Restore ONLY the missing words - do NOT add new words that weren't in the original text
3. Correct any spelling, grammar, or typing errors in the existing words
4. Ensure the restored text matches what the original complete text should have been

Key principle: Restore what's missing, but stay faithful to the original content. Don't add words just to make it "more complete" - only restore what was actually there.

Text to correct: ${text}

Return your response as a JSON object with two fields:
1. "corrected_text": The corrected version with all missing words restored and errors fixed, matching the original complete text
2. "rationale": An explanation of what errors you found (including missing words) and why you made each correction

Format your response as valid JSON only, with no additional text before or after.`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiTokn}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-4-fast',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.1,
        max_tokens: 900,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const result = await response.json();

    if (!result.choices || result.choices.length === 0) {
      return NextResponse.json(
        { error: 'Unexpected API response format' },
        { status: 500 }
      );
    }

    const content = result.choices[0].message.content.trim();
    const jsonResponse = JSON.parse(content);

    return NextResponse.json({
      corrected_text: jsonResponse.corrected_text || text,
      rationale: jsonResponse.rationale || '',
    });
  } catch (error: any) {
    console.error('Error in correction API:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while correcting the text' },
      { status: 500 }
    );
  }
}

