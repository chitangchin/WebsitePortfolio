const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm">
        <span className="text-gray-900 font-bold text-lg mr-2 dark:text-gray-100">Brandon</span>&copy; {new Date().getFullYear()} This Page was tested by Cypress
    </footer>
  )
}

export default Footer