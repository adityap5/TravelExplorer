import { GoogleMap, LoadScript } from '@react-google-maps/api'

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <GoogleMap
      mapContainerStyle={{ width: '400px', height: '300px' }}
      center={{ lat: 31.1048, lng: 77.1734 }}
      zoom={8}
    />
  </LoadScript>
  )
}

export default Map
