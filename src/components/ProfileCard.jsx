function ProfileCard(props){
    return(
        <>
        <div>
            <p>Name:{props.name}</p>
            <p>Department:{props.dep}</p>
            <p>Year:{props.year}</p>
        </div>

        </>
    )
}
export default ProfileCard;