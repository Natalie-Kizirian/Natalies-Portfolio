function InfoCard({ children, className = "", visible = true }) {
  return (
    <div
      className={`bg-bg-dark flex w-full flex-col gap-8 overflow-hidden p-3 text-white transition-all duration-500 md:p-5 ${
        visible
          ? "[&::-webkit-scrollbar-thumb]:bg-secondary-dark lg:max-h-250 lg:overflow-y-scroll lg:opacity-100 [&::-webkit-scrollbar]:w-1.5  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
          : "lg:max-h-0 lg:p-0 lg:opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
export default InfoCard;
