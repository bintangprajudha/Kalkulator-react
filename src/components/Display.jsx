export default function Display({ data, isSubmit }) {
  return (
    <>
      {!isSubmit ? (
        <>
          <div className="display one text-light text-end fw-bold pb-3 mb-2">
            {data.prev}
          </div>
          <div className="display two text-end fw-bold text-tertiary mb-3">
            {data.result}
          </div>
        </>
      ) : (
        <>
          <div className="display two text-tertiary text-end fw-bold pb-3">
            {data.prev}
          </div>
          <div className="display one text-end fw-bold text-light mb-4">
            {data.result}
          </div>
        </>
      )}
    </>
  );
}
