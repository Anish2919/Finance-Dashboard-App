export interface DailyData {
    date: string; 
    revenue: number; 
    expenses: number; 
}

export interface MonthData {
    month: string; 
    revenue: number; 
    expenses: number; 
    operationalExpenses: number; 
    nonOperationalExpenses: number; 
}

export interface KPIAttributes {
    totalProfit: number; 
    totalRevenue: number; 
    totalExpenses: number; 
    expencesByCategory: Map<string, number>; 
    monthlyData: MonthData[]; 
    dailyData: DailyData[]; 
}

export interface Transaction {
    buyer: number; 
    amount: number; 
    productIds: string, 
} 

export interface ProductResponse {
    price: number; 
    expense: number; 
    transactions: string; 
}
