
interface ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}


export const Button = ({ children, type, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#432E97] w-full p-3 text-white rounded-2xl mt-4 ${className}`}
    >
      {children}
    </button>
  )
}