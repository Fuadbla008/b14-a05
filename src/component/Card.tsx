import type { Itype } from '../type';

interface Data {
    item: Itype;
    onAdd: () => void;
    disabled: boolean;
}

const DetailsCard = ({ item, onAdd, disabled }: Data) => {
    const { name, category, description, icon, rating, difficulty, badge } = item;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">

            <div className="flex justify-between items-start mb-5">
                <img src={icon} alt={`${name} icon`} className="w-10 h-10" />
                {badge && (
                    <span className="bg-blue-50 text-blue-500 text-[11px] font-semibold px-3 py-1 rounded-full">
                        {badge}
                    </span>
                )}
            </div>

            <h2 className="text-[22px] font-bold text-gray-900 mb-2">{name}</h2>
            <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-700 text-[12px] font-medium px-2.5 py-1 rounded-md">
                        {category}
                    </span>
                    <span className="text-gray-500 text-[13px]">{difficulty}</span>
                </div>

                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 text-[13px] font-medium">{rating}</span>
                </div>
            </div>

            <button
                onClick={onAdd}
                className={`w-full py-2.5 rounded-lg font-medium text-[14px] transition-colors duration-200 ${
                    disabled
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#111827] text-white hover:bg-gray-800 cursor-pointer'
                }`}
            >
                {disabled ? '✓ Added to Stack' : 'Add to Stack'}
            </button>

        </div>
    )
}
export default DetailsCard;