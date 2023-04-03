import CategoryContext from './categoryContext'

export default function CategoryProvider({ children }) {
  
  const categoryContext = {
    data: [],
  }
  

  return (
    <CategoryContext.Provider>
      {children}
    </CategoryContext.Provider>
  )
}