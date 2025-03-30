
const  UserProfile = async ({params}) => {
  // The params object contains the dynamic segments of the URL
  const {id} = await params
  return (
    <div>Params: {id}</div>
  )
}

export default UserProfile