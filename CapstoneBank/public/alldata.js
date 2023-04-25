function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });
    }, []);

    return (<>
        <Card
            bgcolor="info" margin='0' 
            padding='30px' borderRadius='10px' 
            header="All Data in Store"
            txtcolor="white"  
            body={data}
        />
    </>);
}
