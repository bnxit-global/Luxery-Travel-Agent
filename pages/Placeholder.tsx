import React from 'react';
import PageHeader from '../components/PageHeader';

interface Props {
  title: string;
  imageId: string;
  content: string;
}

const Placeholder: React.FC<Props> = ({ title, imageId, content }) => {
  return (
    <div className="bg-luxury-black min-h-screen text-gray-200">
      <PageHeader title={title} image={`https://picsum.photos/id/${imageId}/1920/600`} />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-xl text-gray-400 text-center">{content}</p>
        
        {/* Simulating content blocks */}
        <div className="mt-12 grid gap-8 opacity-20">
            <div className="h-64 bg-white rounded-lg animate-pulse"></div>
            <div className="h-32 bg-white rounded-lg animate-pulse"></div>
            <div className="h-32 bg-white rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;