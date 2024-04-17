// Dependencies
import {AdminPage} from "./AdminPage";
import {UserPage} from "./UserPage";

export const StartingPage = () => {


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 w-96 p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl mb-4 ">Hvem er du?</h2>
                <div className="flex justify-between">
                    <button
                        className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Lærer
                    </button>
                    <button
                        className="bg-green-500 w-40 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Elev
                    </button>
                </div>
            </div>
        </div>
    );
}