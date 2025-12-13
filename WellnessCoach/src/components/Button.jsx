
export default function Button ({children, className = '', style = {}, onClick}){
  return (
    <button
      onClick={onClick}
      style={style}
      className={`border-[1px] p-3.5 px-[30px] md:px-[40px] rounded-2xl md:rounded-3xl text-white bg-[#70A309] hover:bg-[#9ce30c] hover:text-white ${className}`}
    >
      {children}
    </button>
  );
}
