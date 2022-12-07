const darkmodeButton = ({ children, className, onClick }) => {
  return (
    <button className={`p-2 rounded-md dark:ring-white bg-black dark:bg-white dark:text-black text-white ${className}`}onClick={onClick}>
        {children}
    </button>
  )
}

export default darkmodeButton