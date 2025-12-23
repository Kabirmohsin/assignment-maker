import React from 'react';

const FontCard = ({ 
  fontId, 
  name, 
  description, 
  isSelected, 
  onSelect,
  previewText,
  style = "casual" 
}) => {
  const styleColors = {
    neat: 'from-blue-500 to-blue-600',
    casual: 'from-green-500 to-green-600',
    messy: 'from-amber-500 to-amber-600',
    formal: 'from-purple-500 to-purple-600',
    artistic: 'from-pink-500 to-pink-600',
  };

  const styleLabels = {
    neat: 'Neat',
    casual: 'Casual',
    messy: 'Messy',
    formal: 'Formal',
    artistic: 'Artistic',
  };

  // Map fontId to the correct font class
  const getFontClass = (id) => {
    const fontMap = {
      handwriting1: 'font-handwriting1 handwriting-academic',
      handwriting2: 'font-handwriting2 handwriting-casual',
      handwriting3: 'font-handwriting3 handwriting-artistic',
      handwriting4: 'font-handwriting4 handwriting-notes',
      handwriting5: 'font-handwriting5 handwriting-formal',
      handwriting6: 'font-handwriting6 handwriting-print',
    };
    return fontMap[id] || 'font-handwriting1 handwriting-academic';
  };

  // Get preview text
  const getPreviewText = (id) => {
    if (previewText) return previewText;
    
    const previews = {
      handwriting1: "The quick brown fox jumps over the lazy dog. 1234567890",
      handwriting2: "Mackenzie's assignment on quadratic equations and derivatives.",
      handwriting3: "English literature analysis of Shakespearean sonnets and themes.",
      handwriting4: "Physics problems on thermodynamics and quantum mechanics.",
      handwriting5: "History essay on the impact of industrial revolution.",
      handwriting6: "Chemical equations and biological diagrams with labels.",
    };
    return previews[id] || "Sample handwriting preview text";
  };

  const fontClass = getFontClass(fontId);
  const defaultPreviewText = getPreviewText(fontId);

  return (
    <div
      onClick={() => onSelect(fontId)}
      className={`bg-white rounded-xl p-5 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isSelected 
          ? 'border-primary-500 ring-2 ring-primary-200 ring-opacity-50 shadow-md' 
          : 'border-gray-200 hover:border-primary-300'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${styleColors[style]} text-white`}>
              {styleLabels[style]}
            </span>
            <span className="text-xs text-gray-500">ID: {fontId}</span>
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-primary-500 bg-primary-500' : 'border-gray-300'
        }`}>
          {isSelected && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-100 paper-texture">
        <div className={`${fontClass} text-lg leading-relaxed text-gray-800 ink-bleed`}>
          {defaultPreviewText}
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Handwriting preview
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Best for:</span>
          <span className="font-medium text-gray-800">
            {fontId === 'handwriting1' && 'Exams & Tests'}
            {fontId === 'handwriting2' && 'Homework & Notes'}
            {fontId === 'handwriting3' && 'Creative Projects'}
            {fontId === 'handwriting4' && 'Classroom Notes'}
            {fontId === 'handwriting5' && 'Official Documents'}
            {fontId === 'handwriting6' && 'Science & Math'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FontCard;