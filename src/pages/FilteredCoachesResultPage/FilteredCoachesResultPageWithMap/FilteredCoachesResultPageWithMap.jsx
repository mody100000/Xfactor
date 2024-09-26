import React from 'react'
import GoogleMapsLoader from '../../../utils/GoogleMapsLoader'
import FilteredCoachesResultPage from '../FilteredCoachesResultPage'

function FilteredCoachesResultPageWithMap() {
    return (
        <GoogleMapsLoader>
            <FilteredCoachesResultPage />
        </GoogleMapsLoader>
    )
}

export default FilteredCoachesResultPageWithMap