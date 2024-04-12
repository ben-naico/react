
export default function ProfileCard(){
    const userDetails = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    };
    return(
        <>
        <h1>{userDetails.name}</h1>
        <img alt={'Photo of'+userDetails.name} src = {userDetails.imageUrl} style={{
            width:userDetails.imageSize ,height:userDetails.imageSize}}/>
        </>
    );
}