'use client'

import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function FicheApprenant() {
  const parcours = [
    {
      annee: "2023 - 2024",
      diplome: "Master",
      filiere: "Informatique",
      etablissement: "ESATIC",
      mga: "15",
      dfa: "AD",
    },
    {
      annee: "2022 - 2023",
      diplome: "Licence",
      filiere: "Informatique",
      etablissement: "ESATIC",
      mga: "14,96",
      dfa: "AD",
    },
  ]

  return (
   <div className="h-screen overflow-hidden flex flex-col bg-[#f9f9f9] font-sans">
      
      {/* Logos */}
      <div className=" flex justify-between items-start px-16 pt-6">
             <Image src="/LOGO_ERSYS_PRIMARY.png" alt="Logo gauche" width={160} height={30} />
             <Image src="/LOGOMETFPA-removebg-preview.png" alt="Logo droit" width={180} height={35} />
       </div>
       <div className="px-5 mt-0">
  <button
    onClick={() => window.history.back()}
    className=" text-black px-3 py-1 rounded hover:bg-[#eee] transition"
  >
    ← Retour
  </button>
</div>

      {/* Photo */}
      <div className="flex justify-center mt-0">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img src="/élève.png" alt="Photo de l'apprenant" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Infos personnelles */}
<div className="flex justify-center mt-3 px-2">
  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
    <h2 className="text-2xl font-bold text-[#4F3130] mb-3 text-center">Informations de l'apprenant</h2>
    <div className="grid sm:grid-cols-2 gap-2 text-[#333] text-base">
      <div className="bg-white p-2 rounded-lg">
        Nom : <span className="ml-2"><strong>Elmu</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        Prénom :<span className="ml-2"><strong>Sayann</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        Date / Lieu de naissance : <span className="ml-2"><strong>05/07/2005 / Abidjan</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        Nationalité : <span className="ml-2"><strong>Ivoirienne</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
         Genre : <span className="ml-2"><strong>Masculin</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
         Matricule :<span className="ml-2"><strong>15222569V</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        Numéro CMU :<span className="ml-2"><strong>CMU-2023-456771</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
        Téléphone : <span className="ml-2"><strong>+225 0102030405</strong></span>
      </div>
      <div className="bg-white p-2 rounded-lg  sm:col-span-2">
        Email : <span className="ml-2"> <strong>sayann.e@email.com</strong></span>
      </div>
          </div>
        </div>
      </div>

      {/* Tableau du parcours */}
<div className="flex justify-center mt-4 px-4 pb-4">
  <div className="bg-white rounded-xl shadow-md p-3 w-full max-w-6xl">
    <div className="flex justify-center mt-2 px-4">
      <span className="text-center text-gray-600 mb-2 text-lg font-semibold w-full max-w-6xl block">
        🎓 Parcours scolaire
      </span>
    </div>
    <Table className="w-full text-base text-left text-gray-800 rounded-lg overflow-hidden shadow-lg">
      <TableHeader className="bg-[#4D5D91]">
      <TableRow>
        <TableHead className="px-6 py-4 text-white">Année</TableHead>
        <TableHead className="px-6 py-4 text-white">Diplôme</TableHead>
        <TableHead className="px-6 py-4 text-white">Filière</TableHead>
        <TableHead className="px-6 py-4 text-white">Établissement</TableHead>
        <TableHead className="px-6 py-4 text-white">MGA</TableHead>
        <TableHead className="px-6 py-4 text-white">DFA</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
        {parcours.map((row, index) => (
          <TableRow
            key={index}
            className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-50"}
          >
            <TableCell className="px-6 py-4 font-medium">{row.annee}</TableCell>
            <TableCell className="px-6 py-4">{row.diplome}</TableCell>
            <TableCell className="px-6 py-4">{row.filiere}</TableCell>
            <TableCell className="px-6 py-4">{row.etablissement}</TableCell>
            <TableCell className="px-6 py-4">{row.mga}</TableCell>
            <TableCell className="px-6 py-4">
              {row.dfa ? (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">
                  {row.dfa}
                </span>
              ) : (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">
                  N/A
                </span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>

      {/* Footer */}
      <footer className="mt-auto w-full text-center py-3 bg-[#566495] text-[#F7F7F6] text-sm">
        &copy; {new Date().getFullYear()} METFPA. Tous droits réservés.
      </footer>
    </div>
  )
}
