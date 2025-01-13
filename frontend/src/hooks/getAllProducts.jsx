



export const fetchProducts = async () => { // it is made hook to be re-used at multiple components for showing products

    const raw=await fetch("",{

    })
    const data=raw.json();

    console.log(data);

    // uploading in redux store
}