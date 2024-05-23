type InputProps = {
  placeholder: string
  value: string
  handleInputChange: (event: string) => void
}

export default function Input({ placeholder, value, handleInputChange }: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border p-1 rounded w-full"
      onChange={handleChange}
      value={value}
    />
  )
}
