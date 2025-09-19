import { useDroppable } from '@dnd-kit/core';

const Recycle = () => {
  const { isOver, setNodeRef } = useDroppable({ id: 'recycle' });
  return (
    <div
      ref={setNodeRef}
      style={{
        width: '100%',
        height: 300,
        backgroundColor: isOver ? 'red' : '#fab',
      }}
    >
      Recycle
    </div>
  );
};

export default Recycle;
