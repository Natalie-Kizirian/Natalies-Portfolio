function SectionTitle({children}) {
  return (
    <div className="relative w-full">
      <h1 className="border-brand-gradient relative z-20 mb-3 border-b-2 text-xl font-bold uppercase">
       {children}
      </h1>
      <div className="bg-brand-gradient absolute top-0 -left-2 z-10 h-5 w-5 rounded-full " />
    </div>
  );
}
export default SectionTitle;
