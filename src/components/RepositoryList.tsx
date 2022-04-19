import { RepositoryItem } from './RepositoryItem'
import { useState, useEffect } from 'react'

interface IRepository {
    name: string;
    description: string;
    html_url: string;

}


export const RepositoryList = () => {

    const [repositories, setRespositories] = useState<IRepository[]>([])

    useEffect(() => {
        fetch('http://api.github.com/users/wesAlves/repos')
            .then(response => response.json())
            .then(data => setRespositories(data))
    }, [])

    return (
        <section>
            <h1>Respository list</h1>

            <ul>
                {
                    repositories.map(repository => {
                        return (
                                <RepositoryItem key={repository.name} repository={repository} />
                        )
                    })
                }
            </ul>
        </section>
    )
}
