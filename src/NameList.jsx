export const NameList = () => {
    const names = ['Anshu', 'John', 'Doe', 'Jane', 'Smith']
    const nameList = names.map((name) => <h2>{name}</h2>)
    return <div>{nameList}</div>
}