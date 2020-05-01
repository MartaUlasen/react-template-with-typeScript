import React, { FunctionComponent, useEffect} from 'react';
import { connect, ResolveThunks } from 'react-redux';
import { thunks, ICharactersState } from 'store/allCases';
import {IRootState} from 'store';

type IProps = ICharactersState & Pick<ResolveThunks<typeof thunks>, 'fetchCharacters'>;

const Home: FunctionComponent<IProps> = ({
    isLoading,
    data,
    error,
    fetchCharacters,
}) => {
    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);
console.log(data)
    return (
        <div>
            <h3>
                HOME
            </h3>
            <div>{isLoading ? 'LOADING': null}</div>
            {/* <div>{data?.results.map(item => <span key={item.id}>{item.name}</span>)}</div> */}

        </div>
    );
}
const mapStateToProps = ({characters}: IRootState) => ({
    isLoading: characters.isLoading,
    data: characters.data,
    error: characters.error,
});

const mapDispatchToProps = {
    fetchCharacters: thunks.fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
