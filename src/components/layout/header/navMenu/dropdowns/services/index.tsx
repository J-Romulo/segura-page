import { useTranslations } from 'next-intl';
import { Button } from '../../../../../ui/Button';

export function ServicesDropdown() {
  const translation = useTranslations('header.dropdowns.services');

  return (
    <div className="mx-auto max-w-[1320px] px-20 py-4 lg:py-12">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col items-start justify-start gap-5">
          <p className="text-deep-green border-b-segura-white font-display mb-2 w-full border-b-2 pb-2 font-medium">
            {translation('deployment.title')}
          </p>
          <p className="text-deep-green">{translation('deployment.desc')}</p>
          <Button
            variant="transparent-dark"
            href="/services/deployment-and-consulting"
          >
            {translation('deployment.cta')}
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-start justify-start gap-5">
          <p className="text-deep-green border-b-segura-white font-display mb-2 w-full border-b-2 pb-2 font-medium">
            {translation('solutionCenter.title')}
          </p>
          <p className="text-deep-green">
            {translation('solutionCenter.desc')}
          </p>
          <Button variant="transparent-dark" href="/services/solution-cente">
            {translation('solutionCenter.cta')}
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-start justify-start gap-5">
          <p className="text-deep-green border-b-segura-white font-display mb-2 w-full border-b-2 pb-2 font-medium">
            {translation('training.title')}
          </p>
          <p className="text-deep-green">{translation('training.desc')}</p>
          <Button
            variant="transparent-dark"
            href="/services/training-and-certification"
          >
            {translation('training.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
}
