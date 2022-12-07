const darkmodeButton = ({ children, className }) => {
  return (
    <button className={`place-self-center p-2 rounded-md dark:hover:ring-2 dark:hover:ring-white hover:ring-2 hover:ring-black ${className}`}>
        {children}
    </button>
  )
}

export default darkmodeButton