import { useEffect, useState } from 'react'
import { SciVizPageType, RestrictionStore } from './SciVizInterfaces'
import SciVizGrid from './SciVizGrid'

interface PageProps {
    page: SciVizPageType
    jwtToken?: string
}

function SciVizPage(props: PageProps) {
    const [restrictionList, setRestrictionList] = useState<string[]>([])
    const [store, setStore] = useState<RestrictionStore>({})
    const pageData = props.page

    useEffect(() => {
        setRestrictionList(new URLSearchParams(window.location.search).toString().split('&'))
    }, [])
    const updateRestrictionList = (queryParams: string): string => {
        setRestrictionList(new URLSearchParams(queryParams).toString().split('&'))
        return queryParams
    }
    const updateStore = (key: string, record: string[]) => {
        setStore((prevStore) => ({
            ...prevStore,
            [key]: record
        }))
    }

    return (
        <div>
            <div className='grid-container'>
                <ul className='grid-list'>
                    {Object.entries(pageData.grids).map(([name, grid]) => (
                        <SciVizGrid
                            key={JSON.stringify(grid)}
                            name={name}
                            grid={grid}
                            jwtToken={props.jwtToken}
                            restrictionList={[...restrictionList]}
                            store={Object.assign({}, store)}
                            updateRestrictionList={updateRestrictionList}
                            updateStore={updateStore}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SciVizPage
