const useClassName = (inputHasError) => {
  const result = inputHasError ? "control invalid" : "control";
  return result;
};
export default useClassName;
