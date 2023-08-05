import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: 'add-category',
        loadChildren: () =>
          import('./add-category/add-category.module').then(
            (m) => m.AddCategoryModule
          ),
      },
      {
        path: 'edit-category',
        loadChildren: () =>
          import('./edit-category/edit-category.module').then((m) => m.EditCategoryModule),
      },
      {
        path: 'sub-categories',
        loadChildren: () =>
          import('./sub-categories/sub-categories.module').then((m) => m.SubCategoriesModule),
      },
      {
        path: 'add-sub-category',
        loadChildren: () =>
          import('./add-sub-category/add-sub-category.module').then(
            (m) => m.AdminInvoiceModule
          ),
      },
      {
        path: 'edit-sub-category',
        loadChildren: () =>
          import('./edit-sub-category/edit-sub-category.module').then((m) => m.EditSubCategoryModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then(
            (m) => m.SpecialitiesModule
          ),
      },
      {
        path: 'booking-list',
        loadChildren: () =>
          import('./booking-list/booking-list.module').then(
            (m) => m.BookingListModule
          ),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module').then(
            (m) => m.PaymentsModule
          ),
      },
      {
        path: 'rating-type',
        loadChildren: () =>
          import('./rating-type/rating-type.module').then(
            (m) => m.RatingTypeModule
          ),
      },      
      {
        path: 'add-rating-type',
        loadChildren: () =>
          import('./add-rating-type/add-rating-type.module').then(
            (m) => m.AddRatingTypeModule
          ),
      },
      {
        path: 'edit-rating-type',
        loadChildren: () =>
          import('./edit-rating-type/edit-rating-type.module').then(
            (m) => m.EditRatingTypeModule
          ),
      },
      {
        path: 'ratings',
        loadChildren: () =>
          import('./ratings/ratings.module').then(
            (m) => m.RatingsModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('./subscriptions/subscriptions.module').then((m) => m.SubscriptionsModule),
      },
      {
        path: 'add-subscription',
        loadChildren: () =>
          import('./add-subscription/add-subscription.module').then(
            (m) => m.AddSubscriptionModule
          ),
      },
      {
        path: 'edit-subscription',
        loadChildren: () =>
          import('./edit-subscription/edit-subscription.module').then(
            (m) => m.EditSubscriptionModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./wallet/wallet.module').then(
            (m) => m.WalletModule
          ),
      },
      {
        path: 'service-providers',
        loadChildren: () =>
          import('./service-providers/service-providers.module').then(
            (m) => m.ServiceProvidersModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      { 
        path: 'general-settings', 
        loadChildren: () => 
        import('./general-settings/general-settings.module').then(m => m.GeneralSettingsModule) 
      },
      { path: 'system-settings', loadChildren: () => import('./system-settings/system-settings.module').then(m => m.SystemSettingsModule) },
      { path: 'localization-settings', loadChildren: () => import('./localization-settings/localization-settings.module').then(m => m.LocalizationSettingsModule) },
      { path: 'social-settings', loadChildren: () => import('./social-settings/social-settings.module').then(m => m.SocialSettingsModule) },
      { path: 'email-settings', loadChildren: () => import('./email-settings/email-settings.module').then(m => m.EmailSettingsModule) },
      { path: 'payment-settings', loadChildren: () => import('./payment-settings/payment-settings.module').then(m => m.PaymentSettingsModule) },
      { path: 'seo-settings', loadChildren: () => import('./seo-settings/seo-settings.module').then(m => m.SeoSettingsModule) },
      { path: 'other-settings', loadChildren: () => import('./other-settings/other-settings.module').then(m => m.OtherSettingsModule) },
      { path: 'theme-settings', loadChildren: () => import('./theme-settings/theme-settings.module').then(m => m.ThemeSettingsModule) },
      { path: 'languages', loadChildren: () => import('./languages/languages.module').then(m => m.LanguagesModule) },
      { path: 'sms-gateway', loadChildren: () => import('./sms-gateway/sms-gateway.module').then(m => m.SmsGatewayModule) },
      { path: 'frontend-settings', loadChildren: () => import('./frontend-settings/frontend-settings.module').then(m => m.FrontendSettingsModule) },
      { path: 'footer-settings', loadChildren: () => import('./footer-settings/footer-settings.module').then(m => m.FooterSettingsModule) },
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
      { path: 'add-languages', loadChildren: () => import('./add-languages/add-languages.module').then(m => m.AddLanguagesModule) },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'all-notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
