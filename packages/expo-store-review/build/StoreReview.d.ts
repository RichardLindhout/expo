import { StoreReviewPreviewOptions } from './StoreReview.types';
/**
 * Determine if the platform has the capabilities to use `requestedReview`
 * - iOS: `true` if iOS 10.3 or greater and the StoreKit framework is linked
 * - Android: Always `true` (open URL to app store)
 * - web: Always `false`
 */
export declare function isAvailableAsync(): Promise<boolean>;
/**
 * @deprecated use `isAvailableAsync()` instead
 */
export declare function isSupported(): void;
/**
 * Use the iOS `SKStoreReviewController` API to prompt a user rating without leaving the app,
 * or open a web browser to the play store on Android.
 */
export declare function requestReview(): Promise<void>;
/**
 * Get your app's store URLs from `app.config.js` or `app.json`:
 * - iOS: https://docs.expo.io/versions/latest/workflow/configuration#appstoreurlurl-to-your-app-on-the-apple-app-store-if-you-have-deployed-it-there-this-is-used-to-link-to-your-store-page-from-your-expo-project-page-if-your-app-is-public
 * - Android: https://docs.expo.io/versions/latest/workflow/configuration#playstoreurlurl-to-your-app-on-the-google-play-store-if-you-have-deployed-it-there-this-is-used-to-link-to-your-store-page-from-your-expo-project-page-if-your-app-is-public
 * - web: returns `null`
 */
export declare function storeUrl(): string | null;
/**
 * A flag to detect if this module can do anything.
 */
export declare function hasAction(): Promise<boolean>;
/**
 * Dangerously set the global view tint controls.
 * This can be used to change the tint color of the store review alert and in-app App Store preview.
 *
 * @param color
 */
export declare function setTintColor(color: string): void;
/**
 * Present an iOS App Store preview for a published app.
 * iOS only.
 *
 * @param options
 */
export declare function presentPreviewAsync(options: StoreReviewPreviewOptions): Promise<{
    type: 'dismiss';
}>;
/**
 * Dismiss the currently presented App Store preview controller.
 * iOS only.
 */
export declare function dismissPreviewAsync(): Promise<void>;
export { StoreReviewPreviewOptions };
