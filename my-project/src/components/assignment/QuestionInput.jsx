import React from 'react';

const QuestionInput = ({ 
  question, 
  index, 
  onUpdate, 
  onRemove,
  showMarks = true 
}) => {
  const handleChange = (field, value) => {
    onUpdate(question.id, { [field]: value });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:border-primary-200 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Question {index + 1}</h4>
            <p className="text-xs text-gray-500">ID: {question.id}</p>
          </div>
        </div>
        <button
          onClick={() => onRemove(question.id)}
          className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question Text *
          </label>
          <textarea
            value={question.text || ''}
            onChange={(e) => handleChange('text', e.target.value)}
            placeholder="Enter the question here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none min-h-[100px]"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showMarks && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marks
              </label>
              <input
                type="number"
                value={question.marks || ''}
                onChange={(e) => handleChange('marks', parseInt(e.target.value) || 0)}
                placeholder="e.g., 10"
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={question.type || 'short'}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="short">Short Answer</option>
              <option value="long">Long Answer</option>
              <option value="multiple">Multiple Choice</option>
              <option value="essay">Essay</option>
              <option value="calculation">Calculation</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Answer (Optional)
          </label>
          <textarea
            value={question.answer || ''}
            onChange={(e) => handleChange('answer', e.target.value)}
            placeholder="Enter expected answer..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none min-h-[80px]"
            rows={2}
          />
        </div>

        {question.type === 'multiple' && (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Options
            </label>
            {['A', 'B', 'C', 'D'].map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center font-medium">
                  {option}
                </div>
                <input
                  type="text"
                  value={question.options?.[option.toLowerCase()] || ''}
                  onChange={(e) => handleChange(`options.${option.toLowerCase()}`, e.target.value)}
                  placeholder={`Option ${option}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            ))}
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correct Answer
              </label>
              <select
                value={question.correctOption || 'a'}
                onChange={(e) => handleChange('correctOption', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="a">Option A</option>
                <option value="b">Option B</option>
                <option value="c">Option C</option>
                <option value="d">Option D</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionInput;