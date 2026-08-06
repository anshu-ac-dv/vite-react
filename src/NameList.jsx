export const NameList = () => {
    const names = ['Anshu', 'John', 'Doe', 'Jane', 'Smith']
    const nameList = names.map((name, index) => <h2 key={index}>{index + 1}. {name}</h2>)
    return <div>{nameList}</div>
}