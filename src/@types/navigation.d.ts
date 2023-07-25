export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;

      feedback: {
        feedbackType: 'positive' | 'negative'
      };

      newMeal: undefined;

      detailPercent: undefined;
      
      mealDetails: {
        id: string;
      };
    }
  }
}