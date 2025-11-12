'use client'
import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect } from 'react'

const geocodeAddress = async (address: string) => {
  const geocoder = new google.maps.Geocoder()

  return new Promise<google.maps.LatLngLiteral | null>((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const location = results[0].geometry.location
        resolve({ lat: location.lat(), lng: location.lng() })
      } else {
        console.error('Geocoding failed:', status, results)
        reject(null)
      }
    })
  })
}

const Map = ({ address }: { address: string }) => {
  const mapRef = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      // Init a marker
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary

      let position = await geocodeAddress(address)

      if (!position) {
        // If no position was returned by the function, defaults to coordinates of 1280 Main Street West
        position = { lat: 43.25877282006293, lng: -79.91948204551854 }
      }

      // Map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        disableDefaultUI: true,
        zoom: 17,
        mapId: 'GDG_MAP_ID',
      }

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      // display a marker
      new AdvancedMarkerElement({
        map: map,
        position: position,
      })
    }

    initMap()
  }, [])
  return <div className='aspect-[7/3] max-w-full' ref={mapRef} />
}

export default Map
