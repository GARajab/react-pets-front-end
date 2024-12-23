const PetList = ({ petList }) => {

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {petList.map((pet) => (
          <li key={pet._id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PetList
