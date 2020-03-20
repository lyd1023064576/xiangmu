const getters = {
    self: state => state.user.self,
    token: state => state.user.token,
    currentCommunity: (state, getters) => {
        let cid = getters.currentCommunityId
        return getters.communities.filter(item => {
            return item.communityId === cid
        })
    }
}
export default getters