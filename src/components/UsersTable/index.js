import { Container, SearchInputContainer } from "./styles";
import { useEffect, useState } from "react";


export function UsersTable() {
  const [users, setUsers] = useState([])
  const [initUsers, setInitUsers] = useState([])
  const [searchUsers, setSearchUsers] = useState([])

  function formatedPhone(number) {
    const countryNumber = number.slice(0,2)
    const satetNumber = number.slice(2,4)
    const firstFiveNumbers = number.slice(4,9)
    const fourLastNumbers = number.slice(9,13)

    const numberPhone = `+${countryNumber} (${satetNumber}) ${firstFiveNumbers}-${fourLastNumbers}`

    return numberPhone

  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/employess')
  
        let data = await response.json()

        data.forEach((user) => {
          user.phone = formatedPhone(user.phone)
        })

        setInitUsers(data)
        setSearchUsers(data)
        setUsers(data)

      } catch (error) {
        console.log(error)
      }
    } 

    fetchUsers()
  }, [])

  const handleOnChange = ({ target }) => {
    if(target.value.length === 0) {
      setSearchUsers(initUsers)
      return
    } else if(target.value.length >= 1) {

      const usersFiltered = users.filter((user) => {
        return user.name.toLowerCase().includes(target.value.toLowerCase())
      })

      setSearchUsers(usersFiltered)
    }
  }

  return (
    <Container>
      <SearchInputContainer>
        <h1>Funcionarios</h1>
        <input 
          type="text"
          placeholder="Pesquise pelo nome" 
          onChange={handleOnChange}
        />
      </SearchInputContainer>

      <table>
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>

        <tbody>
          {searchUsers.map(user => (
              <tr key={ user.id }>
                <td><img src={ user.image } alt="" /></td>
                <td>{ user.name }</td>
                <td>{ user.job }</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(
                  new Date(user.admission_date)
                )}</td>
                <td>{ user.phone }</td>
              </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}