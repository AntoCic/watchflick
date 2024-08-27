function Contact() {
  const name = 'Antonino Cicala';
  const email = 'anto.cic.127@gmail.com';
  const phone = '+39 3295436315';
  const WebSite = 'https://portfolio-antocic.netlify.app';
  const linkedinLink = 'https://www.linkedin.com/in/antonino-cicala/';
  const gitLink = 'https://github.com/AntoCic';

  return (
    <div className="container mx-auto my-auto">
      <div className="my-3">
        <div className="flex flex-col md:flex-row bg-light bg-opacity-25 border-0 rounded-lg">
          <div className="md:w-2/3">
            <div className="p-4 text-white">
              <p className="mb-2">Nome cognome: {name}</p>
              <p className="mb-2">
                Email: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
              </p>
              <p className="mb-2">
                Telefono: <a href={`tel:${phone}`} className="text-blue-500 hover:underline">{phone}</a>
              </p>
              <p className="mb-2">
                WebSite Portfolio: <a href={WebSite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">/portfolio-antocic</a>
              </p>
              <p className="mb-2">
                Linkedin: <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">/Antonino-Cicala</a>
              </p>
              <p className="mb-2">
                Github: <a href={gitLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">/AntoCic</a>
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <img src="https://raw.githubusercontent.com/AntoCic/AntoCic/main/img/foto_profilo.png" className="w-full h-full rounded-lg object-cover" alt="foto profilo personale" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
