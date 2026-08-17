function InfoContainer({ children, className = "", visible = true }) {
  return (
    <div
      className={`text-title flex w-full flex-col gap-8 overflow-hidden bg-black/95 p-4 transition-all duration-500 md:p-5 ${
        visible
          ? "[&::-webkit-scrollbar-thumb]:bg-gray-border lg:max-h-250 lg:overflow-y-scroll lg:opacity-100 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
          : "lg:max-h-0 lg:p-0 lg:opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
export default InfoContainer;
