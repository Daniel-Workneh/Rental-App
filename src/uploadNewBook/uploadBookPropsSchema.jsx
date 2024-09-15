import { z } from 'zod';

// Schema for UploadNewBook props
const newBookPropsSchema = z.object({
    open: z.boolean(),
    onClose: z.function().args().returns(z.void()),
    questionnaire: z.array(z.string()),
});

export default newBookPropsSchema