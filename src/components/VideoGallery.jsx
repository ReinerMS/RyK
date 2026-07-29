import { videoList } from '../data/siteDataVideos'

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-2 sm:gap-6 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {videoList.map((video) => (
        <div
          key={video.id}
          className="glass-card group overflow-hidden rounded-2xl p-2 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Contenedor del Reproductor de YouTube (Aspecto 9:16 Vertical) */}
          <div className="overflow-hidden rounded-xl shadow-inner bg-black/5 aspect-9/16 flex items-center justify-center relative">
            <iframe
              /* 
                Explicación de los parámetros añadidos:
                - autoplay=1 : Inicia el video solo al cargar la página.
                - mute=1     : Obligatorio, los navegadores bloquean el autoplay si el video tiene sonido.
                - loop=1     : Activa el bucle infinito.
                - playlist=${video.youtubeId} : Requisito de YouTube para permitir el bucle en videos individuales.
                - controls=0 : Opcional, puedes cambiarlo a 1 si quieres que puedan pausarlo o ver la barra.
              */
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=1&rel=0&modestbranding=1`}
              title={video.title}
              className="w-full h-full object-cover z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Información del Video */}
          <div className="mt-3 space-y-1 px-2 pb-1">
            <h3 className="font-display text-lg text-rose-700 transition-colors duration-300 group-hover:text-rose-500 line-clamp-1">
              {video.title}
            </h3>
            {video.description && (
              <p className="text-xs font-light leading-snug text-ink/70 line-clamp-2">
                {video.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}