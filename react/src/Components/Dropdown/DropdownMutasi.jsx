export default function DropdownMutasi() {
    const pangkat = [
        {
            namaPangkat: "Brijen Pol",
            value: "brijen pol",
        },
        {
            namaPangkat: "Kombes Pol",
            value: "kombes pol",
        },
        {
            namaPangkat: "KBP",
            value: "kbp",
        },
        {
            namaPangkat: "AKBP",
            value: "akbp",
        },
        {
            namaPangkat: "Kompol",
            value: "kompol",
        },
        {
            namaPangkat: "AKP",
            value: "IPTU",
        },
        {
            namaPangkat: "IPDA",
            value: "ipda",
        },
        {
            namaPangkat: "AIPTU",
            value: "aiptu",
        },
        {
            namaPangkat: "AIPDA",
            value: "aipda",
        },
        {
            namaPangkat: "BRIPKA",
            value: "bripka",
        },
        {
            namaPangkat: "BRIGADIR",
            value: "brigadir",
        },
        {
            namaPangkat: "BRIPTU",
            value: "briptu",
        },
        {
            namaPangkat: "BRIPDA",
            value: "bripda",
        },
        {
            namaPangkat: "ABRIP",
            value: "abrip",
        },
        {
            namaPangkat: "ABRIPTU",
            value: "abriptu",
        },
        {
            namaPangkat: "ABRIPDA",
            value: "abripda",
        },
        {
            namaPangkat: "BHARAKA",
            value: "bharaka",
        },
        {
            namaPangkat: "BHARATU",
            value: "bharatu",
        },
        {
            namaPangkat: "BHARADA",
            value: "bharada",
        },
        {
            namaPangkat: "PNS IV",
            value: "pns iv",
        },
        {
            namaPangkat: "PNS III",
            value: "pns iii",
        },
        {
            namaPangkat: "PNS II",
            value: "pns ii",
        },
        {
            namaPangkat: "PNS I",
            value: "pns i",
        },
        {
            namaPangkat: "CPNS",
            value: "cpns",
        },
    ];

    return (
        <form className="mx-auto mt-2">
            <select className="bg-white font-medium border-black border-2 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Pilih pangkat baru</option>

                {pangkat.map((pangkat, index) => {
                    return (
                        <option value={pangkat.value} key={index}>
                            {pangkat.namaPangkat}
                        </option>
                    );
                })}
            </select>
        </form>
    );
}
