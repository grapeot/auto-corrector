'use client';

import { useState } from 'react';

const EXAMPLE_SENTENCES = [
  {
    label: 'Fat Finger Error',
    text: 'The quock brown fox jumos over the lazy dog.',
  },
  {
    label: 'Omission Error',
    text: 'The restaurant serves food every Reservations are recommended weekends.',
  },
  {
    label: 'Phonetic Error',
    text: 'The train arived at the station exaktly on time. Pazzengers quickly borded.',
  },
  {
    label: 'Multiple Errors',
    text: 'I ned to finih my homewrk befor dinner. The assgnment is due tomorow.',
  },
  {
    label: 'Missing Words',
    text: 'She walked park on sunny afternoon. Birds were trees.',
  },
];

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [rationale, setRationale] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCorrect = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to correct');
      return;
    }

    setLoading(true);
    setError('');
    setCorrectedText('');
    setRationale('');

    try {
      const response = await fetch('/api/correct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to correct text');
      }

      setCorrectedText(data.corrected_text);
      setRationale(data.rationale);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (exampleText: string) => {
    setInputText(exampleText);
    setCorrectedText('');
    setRationale('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Auto-Corrector
          </h1>
          <p className="text-lg text-gray-600">
            Powered by LLM (Grok-4-Fast) - Corrects spelling, grammar, typos, and restores missing words
          </p>
        </div>

        {/* Example Sentences */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Try these examples:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {EXAMPLE_SENTENCES.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example.text)}
                className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
              >
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {example.label}
                </div>
                <div className="text-sm text-gray-600 italic">
                  "{example.text}"
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
            Enter text to correct:
          </label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste text with errors here..."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            disabled={loading}
          />
          <button
            onClick={handleCorrect}
            disabled={loading || !inputText.trim()}
            className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Correcting...' : 'Correct Text'}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Corrected Text */}
        {correctedText && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Corrected Text:
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-gray-800 whitespace-pre-wrap">{correctedText}</p>
            </div>

            {rationale && (
              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  Explanation:
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{rationale}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Auto-Corrector v4 - Balanced restoration approach</p>
        </div>
      </div>
    </div>
  );
}
