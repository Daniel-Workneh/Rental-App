import { PieChart, Pie, Legend } from 'recharts';

const data01 = [
    {category: "Fiction", amount: 400, fill: "darkorange"},
    {category: "Bussiness", amount: 300, fill: "red"},
    {category: "Psychology", amount: 300, fill: "purple"},
    {category: "Science", amount: 200, fill: "green"},
    {category: "History", amount: 278, fill: "lightdark"},
    {category: "Linguistic", amount: 189, fill: "blue"}
];

export default function AvailableBooks(){
    const labeling = ({x,y, value}) => {
        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={10}
            >
                {value}
            </text>
        );
    }; 
    return(  
        <PieChart  width={250} height={280} marginTop={0}>
            <Pie 
                color='red'
                data={data01} 
                dataKey="amount" 
                nameKey="category" 
                cx="50%" cy="40%" 
                innerRadius={20} 
                outerRadius={45} 
                label={labeling}
                labelLine={false}
            />
            <Legend
                layout="horizontal" 
                align="center" 
                verticalAlign="bottom"
                iconSize={14}
                wrapperStyle={{
                    fontColor: 'black',  
                    fontSize: '12px',
                    width: '100%',  
                    textAlign: 'left',
                    paddingTop: '5px',
                }}
            />
        </PieChart>
    );
}