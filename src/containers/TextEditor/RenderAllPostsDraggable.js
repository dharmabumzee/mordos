import React from "react";
import { RenderNote } from "./RenderNote";
import { formatDate } from "../../utils/formatTimestamp";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const RenderAllPostsDraggable = ({ savedList, setSavedList, type }) => {
  let items;
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    items = reorder(savedList, result.source.index, result.destination.index);

    setSavedList(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${snapshot.isDraggingOver ? "" : ""}`}
          >
            {savedList.map(({ id, title, text, date }, index) => (
              <Draggable key={id} draggableId={id.toString()} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${
                      snapshot.isDragging ? "shadow-xl bg-indigo-100  " : ""
                    }`}
                  >
                    <RenderNote
                      id={id}
                      title={title}
                      date={formatDate(date)}
                      excerpt={text}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
