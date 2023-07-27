export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;

      feedback: {
        feedbackType: 'positive' | 'negative'
      };

      newMeal?: {
        id: string;
        date: string;
      };

      detailPercent: undefined;

      mealDetails: {
        id: string;
        date: string;
      };
    }
  }
}