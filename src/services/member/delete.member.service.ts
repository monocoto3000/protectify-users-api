import connection from "../../config/db";

const deleteMemberService = async (memberId: number): Promise<void> => {
    await (await connection).execute('DELETE FROM members WHERE id = ?', [memberId]);
}

export default deleteMemberService;