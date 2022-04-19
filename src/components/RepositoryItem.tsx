interface IRepositoryItemsProps{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
    
}

export const RepositoryItem =({repository}:IRepositoryItemsProps) =>{
    
    const {name, description, html_url} = repository
    
    return (
        <li>
            <strong>{name}</strong>
            <p>{description}</p>
            <a href={html_url}>Access repository</a>
        </li>
    )
}