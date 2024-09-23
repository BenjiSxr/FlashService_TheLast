const getPost = async (postId: string) => {
    try {
        const res = await fetch(`http://localhost/5000/User`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            const errorMessage = await res.text();
            console.error('Erreur de récupération du post:', errorMessage);
            return null;
        }

        const data = await res.json();

        if (data.success) {
            return data.post;
        } else {
            console.error('Post non trouvé');
            return null;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du post:', error);
        return null;
    }
};

export default getPost;
