import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Testimonials : CollectionConfig = {

    slug:'testimonials',

    access: {

        read: () => true
    },

    fields: [

        {
            label:'Testimonial Image',
            name:'testimonialImage',
            type:'upload',
            relationTo:'media'
        },

        slugField({ useAsSlug : 'name' }),

        {
            label:'Patient Profile Image',
            name:'profileImage',
            type:'upload',
            relationTo:'media'
        },

        {
            label:'Patient Name',
            name:'name',
            type:'text',
            localized:true
        },

        {
            label:'Testimonial',
            name:'testimonial',
            type:'textarea',
            localized:true
        },

        {
            label:'Date',
            name:'date',
            type:'date',
        }
    ],

    endpoints: [

        {
            method:'get',
            path:'/currCollection/:slug',

            handler: async(req) => {
                
                const testSlug = await (req.routeParams.slug);

                if (!testSlug) {
                    return Response.json('could not get testimonial slug');
                }

                const result = await req.payload.find({
                    collection:'testimonials'
                });
                
                const allTests = result.docs;

                const testsPerPage = 6;

                const collections = [];

                const splitTestimonials = async() => {

                        

                    for (let i = 0; i < allTests.length; i+=testsPerPage) {

                        collections.push(allTests.slice(i, i + testsPerPage));

                    }

                    

                }

                let currIndex = 0;

                for (const collection of collections) {

                    
                    const comps = collection.filter(test => test.slug === testSlug);

                    if (comps.length > 0) {
                        break;
                    }

                    currIndex++;

                    

                }

                return Response.json(collections[currIndex]);
            }
        }
    ]
}