import React from 'react';
import QuestionInput from './QuestionInput';
import Button from '../common/Button';

const QuestionList = ({ questions, onAdd, onUpdate, onRemove, showMarks = true }) => {
  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: '',
      type: 'short',
      marks: showMarks ? 5 : undefined,
      answer: '',
    };
    onAdd(newQuestion);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Questions</h3>
          <p className="text-sm text-gray-600">
            {questions.length} question{questions.length !== 1 ? 's' : ''} added
          </p>
        </div>
        <Button
          onClick={handleAddQuestion}
          variant="outline"
          size="sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Question
        </Button>
      </div>

      {questions.length === 0 ? (
        <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h4 className="text-lg font-medium text-gray-700 mb-2">No questions yet</h4>
          <p className="text-gray-500 mb-4 max-w-md mx-auto">
            Start by adding your first question. You can add short answers, essays, multiple choice, and more.
          </p>
          <Button onClick={handleAddQuestion}>
            Add First Question
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((question, index) => (
            <QuestionInput
              key={question.id}
              question={question}
              index={index}
              onUpdate={onUpdate}
              onRemove={onRemove}
              showMarks={showMarks}
            />
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-gray-200">
        <Button
          onClick={handleAddQuestion}
          fullWidth
          variant="ghost"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Another Question
        </Button>
      </div>
    </div>
  );
};

export default QuestionList;